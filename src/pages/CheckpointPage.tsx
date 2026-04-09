// pages/CheckpointPage.tsx — Block-end speaking checkpoint
//
// Shows the checkpoint scenario and speaking prompts.
// Self-assessed: the learner reads the scenario, practises aloud, then marks
// it done. A "Mark as complete" button records completion and navigates back.
//
// Route: /learn/:langId/checkpoints/:checkpointId

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getModule } from "../data/modules"
import { useProgress } from "../context/ProgressContext"
import { NavBar } from "../components/NavBar"
import { Button } from "../components/ui/button"
import { DEBUG } from "../auth/debugSession"

export function CheckpointPage() {
    const { langId = "", checkpointId = "" } = useParams()
    const navigate = useNavigate()
    const mod = getModule(langId)
    const { completeCheckpoint, completedCheckpoints: getCompletedCheckpoints } = useProgress()
    const [phase, setPhase] = useState<"idle" | "confirming" | "practised">("idle")

    const checkpoint = mod?.checkpoints?.find(cp => cp.id === checkpointId)
    const alreadyDone = DEBUG || getCompletedCheckpoints(langId).includes(checkpointId)

    if (!checkpoint) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <NavBar title="Checkpoint" backTo={`/learn/${langId}`} />
                <main className="max-w-2xl mx-auto px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                    <p>Checkpoint not found.</p>
                </main>
            </div>
        )
    }

    async function handleComplete() {
        await completeCheckpoint(langId, checkpointId)
        navigate(`/learn/${langId}?tab=path`)
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <NavBar title={checkpoint.title} backTo={`/learn/${langId}?tab=path`} />

            <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
                {/* Block badge */}
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                        🎯 Block {checkpoint.block} Checkpoint
                    </span>
                    {alreadyDone && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                            ✓ Complete
                        </span>
                    )}
                </div>

                {/* Scenario */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Your scenario</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {checkpoint.scenario}
                    </p>
                </div>

                {/* Speaking prompts */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        What you should be able to say
                    </h2>
                    <ul className="flex flex-col gap-2">
                        {checkpoint.speakingPrompts.map((prompt) => (
                            <li key={prompt} className="flex items-start gap-3">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-bold mt-0.5">
                                    {checkpoint.speakingPrompts.indexOf(prompt) + 1}
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                    {prompt}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Instruction */}
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {alreadyDone
                        ? "You've already completed this checkpoint. Practise again any time."
                        : "Practise speaking aloud using the prompts above. When you're ready, mark the checkpoint as done to unlock the next block."}
                </p>

                {/* Action */}
                {alreadyDone && (
                    <div className="flex flex-col gap-3">
                        {phase === "practised" ? (
                            <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-medium">
                                Good practice! This checkpoint is already complete.
                            </p>
                        ) : (
                            <Button
                                onClick={() => setPhase("practised")}
                                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                            >
                                Practise again
                            </Button>
                        )}
                        <Button
                            variant="outline"
                            onClick={() => navigate(`/learn/${langId}?tab=path`)}
                            className="w-full"
                        >
                            Back to path
                        </Button>
                    </div>
                )}
                {!alreadyDone && phase === "confirming" && (
                    <div className="flex flex-col gap-3">
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-medium">
                            Were you able to complete the scenario?
                        </p>
                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                onClick={() => setPhase("idle")}
                                className="flex-1"
                            >
                                Not yet
                            </Button>
                            <Button
                                onClick={handleComplete}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                            >
                                Yes — mark done
                            </Button>
                        </div>
                    </div>
                )}
                {!alreadyDone && phase === "idle" && (
                    <Button
                        onClick={() => setPhase("confirming")}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                    >
                        I've practised — mark as done
                    </Button>
                )}
            </main>
        </div>
    )
}
