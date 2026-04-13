# Language Study App — Architecture Diagrams

**Last updated: 2026-04-13**

---

## 1. Four-layer overview

```mermaid
graph TD
    subgraph UI["Layer 4 — UI (src/pages, src/components)"]
        Pages["Pages\nHomePage · DashboardPage · UnitPage\nFlashcardsPage · DrillPages · ProfilePage"]
        Components["Shared Components\nNavBar · ExerciseShell · QuizCard\nStatsTab · SpeakButton · DrillDoneScreen"]
    end

    subgraph App["Layer 3 — Application (src/store/actions.ts)"]
        Actions["Use Cases\ncompleteUnit · confirmUnitMastery\ncompleteReinforcement · completeDrillSession\nexportProgressSnapshot · importProgressSnapshot\nresetLanguageData · removeLanguageData"]
    end

    subgraph Domain["Layer 2 — Domain (src/domain)"]
        UnitUnlock["unitUnlock.ts\nisUnitUnlocked()"]
        ExerciseConfig["exerciseConfig.ts\ngetExerciseConfig()\nselectItems()"]
        ReinforcementMapping["reinforcementMapping.ts\ngetVocabUnlockThreshold()\nisVocabExerciseUnlocked()\ngetGrammarExerciseType()"]
    end

    subgraph Infra["Layer 1 — Infrastructure (src/store, src/data, packages)"]
        Registry["registry.ts\nDI container for storage adapters"]
        ProgressStorage["IProgressStorage\nLocalStorage · Supabase"]
        SRSStorage["ISRSStorage\nLocalStorage · Supabase"]
        StatsStorage["IStatsStorage + useStatsStore\nLocalStorage · Supabase"]
        SRS["store/srs.ts\nSRS lifecycle + policy\n(wraps @myorg/srs)"]
        Repo["data/repo.ts\nContent query layer"]
        ContentData["data/{lang}/\nTypeScript content files\n(grammar · vocab · units · culture · …)"]
        Packages["@myorg packages\nsrs · tts · quiz-engine · auth-core"]
    end

    Pages --> Actions
    Pages --> Domain
    Pages --> SRS
    Pages --> Repo
    Components --> Domain
    Components --> SRS
    Actions --> Registry
    Actions --> StatsStorage
    Registry --> ProgressStorage
    Registry --> SRSStorage
    Registry --> StatsStorage
    SRS --> Registry
    Repo --> ContentData
    Packages --> Infra

    style UI fill:#dbeafe,stroke:#3b82f6
    style App fill:#dcfce7,stroke:#22c55e
    style Domain fill:#fef9c3,stroke:#eab308
    style Infra fill:#fce7f3,stroke:#ec4899
```

---

## 2. Storage adapter seam (Stage 1 → Stage 2)

```mermaid
graph LR
    subgraph Bootstrap["main.tsx (bootstrap)"]
        Configure["registry.configure({\n  progress: SupabaseProgressStorage,\n  srs: SupabaseSRSStorage,\n  stats: SupabaseStatsStorage\n})"]
    end

    subgraph Registry["store/registry.ts"]
        R["registry.progress\nregistry.srs\nregistry.stats"]
    end

    subgraph Stage1["Stage 1 — localStorage"]
        LS_P["LocalStorageProgressStorage"]
        LS_S["LocalStorageSRSStorage"]
        LS_St["LocalStorageStatsStorage"]
    end

    subgraph Stage2["Stage 2 — Supabase"]
        SB_P["SupabaseProgressStorage"]
        SB_S["SupabaseSRSStorage"]
        SB_St["SupabaseStatsStorage"]
    end

    subgraph Interfaces["Interfaces"]
        IP["IProgressStorage"]
        IS["ISRSStorage"]
        ISt["IStatsStorage"]
    end

    Configure -->|"swap at bootstrap"| R
    R --> IP
    R --> IS
    R --> ISt
    IP -.->|"Stage 1"| LS_P
    IS -.->|"Stage 1"| LS_S
    ISt -.->|"Stage 1"| LS_St
    IP ==>|"Stage 2"| SB_P
    IS ==>|"Stage 2"| SB_S
    ISt ==>|"Stage 2"| SB_St
```

---

## 3. Data flow — "user completes a unit"

```mermaid
sequenceDiagram
    participant Page as UnitPage
    participant Action as actions.ts
    participant Domain as domain/unitUnlock.ts
    participant Registry as registry.ts
    participant Storage as IProgressStorage
    participant Stats as useStatsStore

    Page->>Domain: isUnitUnlocked(unitId, allUnits, masteredIds)
    Domain-->>Page: true (unit is playable)

    Note over Page: User answers all quiz questions

    Page->>Action: confirmUnitMastery(langId, unitId)
    Action->>Registry: registry.progress.masterUnit(langId, unitId)
    Registry->>Storage: masterUnit(langId, unitId)
    Storage-->>Registry: ok
    Action->>Stats: useStatsStore.getState().recordActivity(langId)
    Stats-->>Action: ok
    Action-->>Page: void (complete)

    Page->>Domain: isUnitUnlocked(nextUnitId, allUnits, updatedMasteredIds)
    Domain-->>Page: true (next unit now unlocked)
```

---

## 4. Content assembly pipeline

```mermaid
graph LR
    subgraph Files["src/data/{lang}/"]
        G["grammar/a1/*.ts\ngrammar/a2/*.ts\n…"]
        V["vocab/a1.ts\nvocab/a2.ts\n…"]
        U["units/a1.ts\nunits/a2.ts\n…"]
        C["culture/a1/*.ts\n…"]
        R["reading/a1.ts\n…"]
        L["listening/a1.ts\n…"]
        Q["questions/placement.ts\nquestions/level-tests.ts"]
    end

    subgraph Factory["data/moduleFactory.ts"]
        CMF["createLanguageModule(slices)\n• flattens per-level arrays\n• stamps language field\n• returns LanguageModule"]
    end

    subgraph Cache["data/modules.ts"]
        MC["Map&lt;langId, LanguageModule&gt;\nloadModule(langId) — dynamic import\ncached after first load"]
    end

    subgraph Repo["data/repo.ts"]
        QF["Named query functions\ngetGrammarForLevel()\ngetVocabForLevel()\ngetUnitsForLevel()\ngetCultureEpisodesForLevel()\n…"]
    end

    Files --> CMF
    CMF --> MC
    MC --> QF
    QF -->|"Pages call repo.ts only\n(never getModule directly)"| Pages
```

---

## 5. Domain layer — what lives where

```mermaid
graph TD
    subgraph Domain["src/domain/ — pure functions, no storage, no React"]
        UU["unitUnlock.ts\n\nisUnitUnlocked(\n  unitId, allUnits,\n  masteredIds, completedCheckpoints\n)\n\nRule: unit N unlocks when unit N-1\nis mastered and its checkpoint passed"]

        EC["exerciseConfig.ts\n\ngetExerciseConfig(context, count)\n→ ExerciseConfig\n\nselectItems(items, config, langId, …)\n→ T[]\n\nRule: SRS tier priority system\n(due → weak → new → random)"]

        RM["reinforcementMapping.ts\n\ngetVocabUnlockThreshold(unit)\nisVocabExerciseUnlocked(unit, completed)\ngetGrammarExerciseType(lesson)\ngetExerciseLabel(typeId)\n\nRule: vocab exercise unlocks after\nN items learned (default: 5)"]
    end

    subgraph Consumers["Consumers"]
        HP["HomePage"]
        DP["DashboardPage"]
        UP["UnitPage"]
        ES["ExerciseShell"]
        ER["exerciseTypes/registry.ts"]
    end

    UU --> HP
    UU --> DP
    UU --> UP
    EC --> ES
    EC --> ER
    RM --> UP
```

---

## 6. Monorepo package boundaries

```mermaid
graph TD
    subgraph App["language-study/src"]
        StoresSRS["store/srs.ts\n(SRS lifecycle + policy)"]
        HooksDrill["hooks/useDrill.ts\n(re-export)"]
        UtilsTTS["utils/tts.ts\n(delegate)"]
        AuthCtx["auth/AuthContext.tsx"]
    end

    subgraph Packages["packages/ (internal monorepo)"]
        SRS["@myorg/srs\ncalcNextReview · SRSCardState\nINITIAL_STATE"]
        QE["@myorg/quiz-engine\nuseDrill hook\nkeyboard shortcuts\nquestion sequencing"]
        TTS["@myorg/tts\nWeb Speech API wrapper"]
        Auth["@myorg/auth-core\nAuthService · AuthApi\nsession management"]
        Storage["@myorg/storage\nLocalStorageAdapter"]
        Validation["@myorg/validation\nform schemas"]
        EventBus["@myorg/event-bus\nEventBus&lt;AppEvents&gt;"]
    end

    StoresSRS -->|"wraps"| SRS
    HooksDrill -->|"re-exports"| QE
    UtilsTTS -->|"delegates to"| TTS
    AuthCtx -->|"uses"| Auth

    note1["Pages import store/srs.ts\n— never @myorg/srs directly"]
    note2["Pages import hooks/useDrill.ts\n— never @myorg/quiz-engine directly"]
```
