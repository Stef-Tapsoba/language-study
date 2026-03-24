// data/spanish/listening/a1.ts
import { ListeningExercise } from "../../../types"

export const a1Listening: ListeningExercise[] = [
    {
        id: "es-l-a1-1",
        level: "A1",
        title: "Buenos días — morning greeting dialogue",
        script: "Buenos días. Me llamo Carlos. ¿Cómo te llamas tú? Me llamo Ana. ¡Mucho gusto, Ana! Mucho gusto, Carlos. ¿Cómo estás? Estoy bien, gracias. ¿Y tú? Muy bien, gracias.",
        translation: "Good morning. My name is Carlos. What's your name? My name is Ana. Nice to meet you, Ana! Nice to meet you, Carlos. How are you? I'm fine, thank you. And you? Very well, thank you.",
        dialogue: [
            { speaker: "Carlos", text: "Buenos días. Me llamo Carlos.", translation: "Good morning. My name is Carlos." },
            { speaker: "Carlos", text: "¿Cómo te llamas tú?", translation: "What's your name?" },
            { speaker: "Ana", text: "Me llamo Ana.", translation: "My name is Ana." },
            { speaker: "Carlos", text: "¡Mucho gusto, Ana!", translation: "Nice to meet you, Ana!" },
            { speaker: "Ana", text: "Mucho gusto, Carlos.", translation: "Nice to meet you, Carlos." },
            { speaker: "Ana", text: "¿Cómo estás?", translation: "How are you?" },
            { speaker: "Carlos", text: "Estoy bien, gracias. ¿Y tú?", translation: "I'm fine, thank you. And you?" },
            { speaker: "Ana", text: "Muy bien, gracias.", translation: "Very well, thank you." }
        ],
        questions: [
            {
                id: "es-l-a1-1-q1",
                level: "A1",
                prompt: "¿Cómo se llama el hombre?",
                options: ["Carlos", "Ana", "Miguel", "Juan"],
                answer: "Carlos"
            },
            {
                id: "es-l-a1-1-q2",
                level: "A1",
                prompt: "¿Cómo está Carlos?",
                options: ["Bien", "Mal", "Regular", "Cansado"],
                answer: "Bien"
            },
            {
                id: "es-l-a1-1-q3",
                level: "A1",
                prompt: "¿En qué momento del día ocurre la conversación?",
                options: ["Por la mañana", "Por la tarde", "Por la noche", "Al mediodía"],
                answer: "Por la mañana"
            }
        ]
    },
    {
        id: "es-l-a1-2",
        level: "A1",
        title: "¿Cuánto cuesta? — market prices",
        script: "Buenos días. ¿Cuánto cuestan las naranjas? Las naranjas cuestan dos euros el kilo. ¿Y los tomates? Los tomates cuestan uno cincuenta el kilo. Quiero un kilo de naranjas y dos kilos de tomates, por favor. Son cinco euros. Aquí tiene. Gracias. ¡Adiós!",
        translation: "Good morning. How much are the oranges? The oranges cost two euros a kilo. And the tomatoes? The tomatoes cost one fifty a kilo. I'd like a kilo of oranges and two kilos of tomatoes, please. That's five euros. Here you go. Thank you. Goodbye!",
        dialogue: [
            { speaker: "Cliente", text: "Buenos días.", translation: "Good morning." },
            { speaker: "Cliente", text: "¿Cuánto cuestan las naranjas?", translation: "How much are the oranges?" },
            { speaker: "Vendedor", text: "Las naranjas cuestan dos euros el kilo.", translation: "The oranges cost two euros a kilo." },
            { speaker: "Cliente", text: "¿Y los tomates?", translation: "And the tomatoes?" },
            { speaker: "Vendedor", text: "Los tomates cuestan uno cincuenta el kilo.", translation: "The tomatoes cost one fifty a kilo." },
            { speaker: "Cliente", text: "Quiero un kilo de naranjas y dos kilos de tomates, por favor.", translation: "I'd like a kilo of oranges and two kilos of tomatoes, please." },
            { speaker: "Vendedor", text: "Son cinco euros.", translation: "That's five euros." },
            { speaker: "Cliente", text: "Aquí tiene.", translation: "Here you go." },
            { speaker: "Vendedor", text: "Gracias. ¡Adiós!", translation: "Thank you. Goodbye!" }
        ],
        questions: [
            {
                id: "es-l-a1-2-q1",
                level: "A1",
                prompt: "¿Cuánto cuestan las naranjas?",
                options: ["Dos euros el kilo", "Uno cincuenta el kilo", "Tres euros el kilo", "Un euro el kilo"],
                answer: "Dos euros el kilo"
            },
            {
                id: "es-l-a1-2-q2",
                level: "A1",
                prompt: "¿Cuánto paga la persona en total?",
                options: ["Cinco euros", "Tres euros", "Cuatro euros", "Seis euros"],
                answer: "Cinco euros"
            },
            {
                id: "es-l-a1-2-q3",
                level: "A1",
                prompt: "¿Cuántos kilos de tomates quiere?",
                options: ["Dos kilos", "Un kilo", "Tres kilos", "Medio kilo"],
                answer: "Dos kilos"
            }
        ]
    },
    {
        id: "es-l-a1-3",
        level: "A1",
        title: "Mi familia — family description monologue",
        script: "Hola. Me llamo Sofía. Tengo dieciséis años. Mi familia tiene cuatro personas. Mi padre se llama Roberto. Es médico. Mi madre se llama Elena. Es profesora. Tengo una hermana pequeña. Se llama Lucía. Tiene ocho años. Vivimos en una casa en Sevilla. Tenemos un gato que se llama Mimi. Es muy bonita.",
        translation: "Hello. My name is Sofía. I am sixteen years old. My family has four people. My father's name is Roberto. He is a doctor. My mother's name is Elena. She is a teacher. I have a little sister. Her name is Lucía. She is eight years old. We live in a house in Seville. We have a cat called Mimi. She is very pretty.",
        questions: [
            {
                id: "es-l-a1-3-q1",
                level: "A1",
                prompt: "¿Cuántos años tiene Sofía?",
                options: ["Dieciséis años", "Ocho años", "Quince años", "Doce años"],
                answer: "Dieciséis años"
            },
            {
                id: "es-l-a1-3-q2",
                level: "A1",
                prompt: "¿Cuál es la profesión del padre?",
                options: ["Médico", "Profesor", "Abogado", "Cocinero"],
                answer: "Médico"
            },
            {
                id: "es-l-a1-3-q3",
                level: "A1",
                prompt: "¿Qué animal tiene la familia?",
                options: ["Un gato", "Un perro", "Un pájaro", "Un conejo"],
                answer: "Un gato"
            }
        ]
    },
    {
        id: "es-l-a1-4",
        level: "A1",
        title: "En el restaurante — ordering food dialogue",
        script: "Buenas tardes. Una mesa para dos, por favor. Por aquí, por favor. Gracias. ¿Qué quieren comer? Yo quiero una ensalada y un filete de pollo. Y yo quiero una sopa y una pizza margherita. ¿Y para beber? Dos aguas, por favor. Muy bien. ¿Algo más? No, gracias. Está todo muy rico. ¿Nos trae la cuenta, por favor?",
        translation: "Good afternoon. A table for two, please. This way, please. Thank you. What would you like to eat? I'd like a salad and a chicken fillet. And I'd like a soup and a margherita pizza. And to drink? Two waters, please. Very good. Anything else? No, thank you. Everything is very tasty. Could you bring us the bill, please?",
        dialogue: [
            { speaker: "Cliente", text: "Buenas tardes. Una mesa para dos, por favor.", translation: "Good afternoon. A table for two, please." },
            { speaker: "Camarero", text: "Por aquí, por favor.", translation: "This way, please." },
            { speaker: "Cliente", text: "Gracias.", translation: "Thank you." },
            { speaker: "Camarero", text: "¿Qué quieren comer?", translation: "What would you like to eat?" },
            { speaker: "Cliente", text: "Yo quiero una ensalada y un filete de pollo.", translation: "I'd like a salad and a chicken fillet." },
            { speaker: "Cliente 2", text: "Y yo quiero una sopa y una pizza margherita.", translation: "And I'd like a soup and a margherita pizza." },
            { speaker: "Camarero", text: "¿Y para beber?", translation: "And to drink?" },
            { speaker: "Cliente", text: "Dos aguas, por favor.", translation: "Two waters, please." },
            { speaker: "Camarero", text: "Muy bien. ¿Algo más?", translation: "Very good. Anything else?" },
            { speaker: "Cliente", text: "No, gracias. Está todo muy rico.", translation: "No, thank you. Everything is very tasty." },
            { speaker: "Cliente 2", text: "¿Nos trae la cuenta, por favor?", translation: "Could you bring us the bill, please?" }
        ],
        questions: [
            {
                id: "es-l-a1-4-q1",
                level: "A1",
                prompt: "¿Para cuántas personas es la mesa?",
                options: ["Para dos", "Para tres", "Para cuatro", "Para una"],
                answer: "Para dos"
            },
            {
                id: "es-l-a1-4-q2",
                level: "A1",
                prompt: "¿Qué pide la primera persona?",
                options: ["Ensalada y pollo", "Sopa y pizza", "Filete y sopa", "Pizza y ensalada"],
                answer: "Ensalada y pollo"
            },
            {
                id: "es-l-a1-4-q3",
                level: "A1",
                prompt: "¿Qué piden para beber?",
                options: ["Dos aguas", "Dos vinos", "Un agua y un vino", "Dos cervezas"],
                answer: "Dos aguas"
            }
        ]
    },
    {
        id: "es-l-a1-5",
        level: "A1",
        title: "¿Dónde está la farmacia? — asking for directions",
        script: "Perdona, ¿dónde está la farmacia? No sé muy bien. Espera... Ve todo recto por esta calle. ¿Todo recto? Sí, todo recto. Después de dos calles, gira a la derecha. ¿A la derecha después de dos calles? Exacto. La farmacia está al final de esa calle, al lado de un banco. ¿Al lado de un banco? Sí, es fácil de encontrar. ¡Muchas gracias! De nada. ¡Hasta luego!",
        translation: "Excuse me, where is the pharmacy? I'm not sure. Wait... Go straight ahead along this street. Straight ahead? Yes, straight ahead. After two streets, turn right. To the right after two streets? Exactly. The pharmacy is at the end of that street, next to a bank. Next to a bank? Yes, it's easy to find. Thank you very much! You're welcome. Goodbye!",
        dialogue: [
            { speaker: "Turista", text: "Perdona, ¿dónde está la farmacia?", translation: "Excuse me, where is the pharmacy?" },
            { speaker: "Local", text: "No sé muy bien. Espera...", translation: "I'm not sure. Wait..." },
            { speaker: "Local", text: "Ve todo recto por esta calle.", translation: "Go straight ahead along this street." },
            { speaker: "Turista", text: "¿Todo recto?", translation: "Straight ahead?" },
            { speaker: "Local", text: "Sí, todo recto. Después de dos calles, gira a la derecha.", translation: "Yes, straight ahead. After two streets, turn right." },
            { speaker: "Turista", text: "¿A la derecha después de dos calles?", translation: "To the right after two streets?" },
            { speaker: "Local", text: "Exacto. La farmacia está al final de esa calle, al lado de un banco.", translation: "Exactly. The pharmacy is at the end of that street, next to a bank." },
            { speaker: "Turista", text: "¿Al lado de un banco?", translation: "Next to a bank?" },
            { speaker: "Local", text: "Sí, es fácil de encontrar.", translation: "Yes, it's easy to find." },
            { speaker: "Turista", text: "¡Muchas gracias!", translation: "Thank you very much!" },
            { speaker: "Local", text: "De nada. ¡Hasta luego!", translation: "You're welcome. Goodbye!" }
        ],
        questions: [
            {
                id: "es-l-a1-5-q1",
                level: "A1",
                prompt: "¿Qué busca el turista?",
                options: ["La farmacia", "El banco", "La estación", "El hotel"],
                answer: "La farmacia"
            },
            {
                id: "es-l-a1-5-q2",
                level: "A1",
                prompt: "¿Cuántas calles tiene que pasar antes de girar?",
                options: ["Dos calles", "Una calle", "Tres calles", "Cuatro calles"],
                answer: "Dos calles"
            },
            {
                id: "es-l-a1-5-q3",
                level: "A1",
                prompt: "¿Qué hay al lado de la farmacia?",
                options: ["Un banco", "Un hotel", "Una iglesia", "Una cafetería"],
                answer: "Un banco"
            }
        ]
    },
    {
        id: "es-l-a1-6",
        level: "A1",
        title: "Mi rutina del día — daily routine monologue",
        script: "Hola. Me llamo Pablo. Soy estudiante. Voy a hablar de mi rutina. Me levanto a las siete de la mañana. Primero me ducho. Después me desayuno — como tostadas y bebo un zumo de naranja. A las ocho y media salgo de casa y voy a la universidad. Tengo clases por la mañana. Al mediodía como en la cafetería con mis amigos. Por la tarde estudio en la biblioteca. A las seis hago ejercicio en el gimnasio. Es muy importante para mí. A las ocho y media ceno en casa. Normalmente como pasta o arroz. Por la noche leo un poco o veo una serie. Me acuesto a las once. Es una rutina tranquila, pero me gusta.",
        translation: "Hello. My name is Pablo. I am a student. I am going to talk about my routine. I get up at seven in the morning. First I shower. Then I have breakfast — I eat toast and drink an orange juice. At half past eight I leave home and go to university. I have classes in the morning. At midday I eat in the cafeteria with my friends. In the afternoon I study in the library. At six I exercise at the gym. It is very important to me. At half past eight I have dinner at home. I usually eat pasta or rice. In the evening I read a little or watch a series. I go to bed at eleven. It is a calm routine, but I like it.",
        questions: [
            {
                id: "es-l-a1-6-q1",
                level: "A1",
                prompt: "¿A qué hora se levanta Pablo?",
                options: ["A las siete", "A las seis", "A las ocho", "A las siete y media"],
                answer: "A las siete"
            },
            {
                id: "es-l-a1-6-q2",
                level: "A1",
                prompt: "¿Qué hace Pablo por la tarde?",
                options: ["Estudia en la biblioteca", "Va a la universidad", "Come con sus amigos", "Ve una serie"],
                answer: "Estudia en la biblioteca"
            },
            {
                id: "es-l-a1-6-q3",
                level: "A1",
                prompt: "¿A qué hora se acuesta Pablo?",
                options: ["A las once", "A las diez", "A las doce", "A las nueve"],
                answer: "A las once"
            }
        ]
    },
    {
        id: "es-l-a1-7",
        level: "A1",
        title: "En el médico — at the doctor's",
        script: "Buenos días. ¿Qué le pasa? Buenos días, doctor. Me duele mucho la cabeza y tengo fiebre. ¿Desde cuándo? Desde ayer por la tarde. ¿Tiene también dolor de garganta? Sí, un poco. ¿Toma algún medicamento? No, no tomo nada. Bien. Abra la boca, por favor. Sí. No es grave. Tiene un resfriado. Le voy a recetar unas pastillas y jarabe para la tos. Necesita descansar y beber mucha agua. ¿Cuándo puedo volver al trabajo? En tres o cuatro días. Muchas gracias, doctor.",
        translation: "Good morning. What is the matter? Good morning, doctor. My head hurts a lot and I have a temperature. Since when? Since yesterday afternoon. Do you also have a sore throat? Yes, a little. Are you taking any medication? No, I'm not taking anything. Good. Open your mouth, please. Yes. It is not serious. You have a cold. I am going to prescribe some tablets and cough syrup. You need to rest and drink plenty of water. When can I go back to work? In three or four days. Thank you very much, doctor.",
        dialogue: [
            { speaker: "Doctor", text: "Buenos días. ¿Qué le pasa?", translation: "Good morning. What is the matter?" },
            { speaker: "Paciente", text: "Buenos días, doctor. Me duele mucho la cabeza y tengo fiebre.", translation: "Good morning, doctor. My head hurts a lot and I have a temperature." },
            { speaker: "Doctor", text: "¿Desde cuándo?", translation: "Since when?" },
            { speaker: "Paciente", text: "Desde ayer por la tarde.", translation: "Since yesterday afternoon." },
            { speaker: "Doctor", text: "¿Tiene también dolor de garganta?", translation: "Do you also have a sore throat?" },
            { speaker: "Paciente", text: "Sí, un poco.", translation: "Yes, a little." },
            { speaker: "Doctor", text: "¿Toma algún medicamento?", translation: "Are you taking any medication?" },
            { speaker: "Paciente", text: "No, no tomo nada.", translation: "No, I'm not taking anything." },
            { speaker: "Doctor", text: "Bien. Abra la boca, por favor.", translation: "Good. Open your mouth, please." },
            { speaker: "Doctor", text: "No es grave. Tiene un resfriado. Le voy a recetar unas pastillas y jarabe para la tos.", translation: "It is not serious. You have a cold. I am going to prescribe some tablets and cough syrup." },
            { speaker: "Doctor", text: "Necesita descansar y beber mucha agua.", translation: "You need to rest and drink plenty of water." },
            { speaker: "Paciente", text: "¿Cuándo puedo volver al trabajo?", translation: "When can I go back to work?" },
            { speaker: "Doctor", text: "En tres o cuatro días.", translation: "In three or four days." },
            { speaker: "Paciente", text: "Muchas gracias, doctor.", translation: "Thank you very much, doctor." }
        ],
        questions: [
            {
                id: "es-l-a1-7-q1",
                level: "A1",
                prompt: "¿Qué síntomas tiene el paciente?",
                options: ["Dolor de cabeza y fiebre", "Dolor de estómago", "Dolor de pierna", "Fiebre y tos solamente"],
                answer: "Dolor de cabeza y fiebre"
            },
            {
                id: "es-l-a1-7-q2",
                level: "A1",
                prompt: "¿Qué dice el doctor que tiene el paciente?",
                options: ["Un resfriado", "La gripe", "Una infección grave", "Alergia"],
                answer: "Un resfriado"
            },
            {
                id: "es-l-a1-7-q3",
                level: "A1",
                prompt: "¿Cuándo puede volver al trabajo el paciente?",
                options: ["En tres o cuatro días", "Mañana", "En una semana", "Hoy mismo"],
                answer: "En tres o cuatro días"
            }
        ]
    }
]
