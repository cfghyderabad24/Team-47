const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const asyncHandler = require('express-async-handler');

const chatbot = asyncHandler(async (req, res) => {
    try {
        const history = req.body.history || [];
        const message = req.body.message;
        const generationConfig = req.body.generationConfig || {};

        console.log(process.env.API_KEY);

        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Initial training data (example conversations)
        const initialTrainingData = [
<<<<<<< HEAD
            { role: "user", parts: [{ text: "you are tutor at vidya verse." }] },
            { role: "model", parts: [{ text: "ok ill be glad to be a tutor at vidyaverse" }] },
            { role: "user", parts: [{ text: "when i ask who are you you should say i am tutor at vidya verse" }] }
        ];

=======
            { role: "user", parts: [{ text: "you are next360 ai helper." }] },
            { role: "model", parts: [{ text: "ok ill be glad to be a ai help bot at next360" }] },
            { role: "user", parts: [{ text: "when i ask who are you you should say i am ai help bot for next360" }] }
        ];
>>>>>>> abafe8b3551b36a307ea4b44aa3e5c96fe618a47
        // Product information
        const productInfo = [
            {
                id: 1,
                name: 'Coding Toy',
                description: 'A fun and interactive coding toy for kids. This toy not only entertains but also educates by introducing basic programming concepts in a playful manner. It comes with a variety of challenges and puzzles that help children develop problem-solving skills. The toy is made from safe, non-toxic materials and is suitable for children aged 5 and up. It encourages creativity and logical thinking, making it an ideal gift for young tech enthusiasts.',
                image: 'https://via.placeholder.com/140',
                price: 29.99,
                manufacturer: 'TechToys Inc.',
                features: ['Interactive learning', 'Safe materials', 'Age 5+'],
                videoLink: 'https://youtu.be/N4WxbY2kCjk?si=3dEH3EduTyCRwNl-',
                themesCovered: ['Toons Time', 'Art Ninjas', 'Movers and Shakers'],
                components: ['Colorful Cartoon Characters (Sprites) and Background images (Backdrops)', 'Coding Blocks', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for Android App', 'Leaderboards', 'Unlimited FUN!'],
                requiredTechnology: 'Android Device',
                ageRange: 'Suitable for Ages: 7 – 99',
            },
            {
                id: 2,
                name: 'Coding Without Computers',
                description: 'A unique and engaging way for students to learn coding without the need for computers. This product uses tangible, physical blocks and a digital app to bring coding concepts to life.',
                image: 'https://via.placeholder.com/140',
                price: 99.99,
                manufacturer: 'RoboTech',
                features: ['DIY assembly', 'Programmable', 'STEM educational'],
                videoLink: 'https://youtu.be/N4WxbY2kCjk?si=3dEH3EduTyCRwNl-',
            },
            {
                id: 3,
                name: 'Coding with Computers',
                description: 'An interactive coding kit designed for learners who prefer to code using computers. This kit provides an immersive experience where students can learn programming concepts through a combination of physical and digital tools.',
                image: 'https://via.placeholder.com/140',
                price: 119.99,
                manufacturer: 'DigitalLearning Inc.',
                features: ['Computer-Based Learning', 'Interactive Software', 'Hands-On Coding', 'Comprehensive Learning'],
                components: ['Physical Coding Blocks', 'Interactive Coding Software', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for Software', 'Leaderboards', 'Unlimited FUN!'],
                requiredTechnology: 'Computer',
                ageRange: 'Suitable for Ages: 7 – 99',
            },
            {
                id: 4,
                name: 'Coding for the Visually Challenged',
                description: 'To truly build inclusive classrooms, we have developed Coding Kits specifically designed for the visually challenged. These kits enable visually impaired students to engage with coding concepts through tactile and auditory learning tools.',
                image: 'https://via.placeholder.com/140',
                price: 149.99,
                manufacturer: 'InclusiveTech',
                features: ['Inclusive Learning', 'Tactile Tools', 'Auditory Feedback', 'Engaging Activities'],
                components: ['Braille Coding Blocks', 'Auditory Guidance App', 'Tactile Gaming Board', 'Activity Book with step-by-step instructions', 'Support Materials'],
                requiredTechnology: 'Android Device',
                ageRange: 'Suitable for Ages: 7 – 99',
            },
            {
                id: 5,
                name: 'ProGame Hybrid Model (With and Without Computers)',
                description: 'The ProGame Hybrid Model combines the best of both worlds by offering a versatile coding learning experience that can be used with or without computers. Designed for ages 7 to 99, this model allows learners to engage with coding concepts through tangible physical blocks and a digital app, as well as interactive software for a comprehensive learning experience.',
                image: 'https://via.placeholder.com/140',
                price: 179.99,
                manufacturer: 'ProGame Innovations',
                features: ['Versatile Learning', 'Engaging and Interactive', 'No Prior Coding Knowledge Needed', 'Educational and Fun'],
                components: ['Colorful Cartoon Characters (Sprites) and Background images (Backdrops)', 'Coding Blocks', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for Android App and Interactive Software', 'Leaderboards', 'Unlimited FUN!'],
                requiredTechnology: 'Android Device, Windows or Mac OS',
                ageRange: 'Suitable for Ages: 7 – 99',
            },
            {
                id: 6,
                name: 'Artificial Intelligence',
                description: 'An advanced coding kit designed to introduce learners to the fascinating world of Artificial Intelligence (AI). This kit includes both physical and digital components to help learners understand and implement AI concepts through hands-on projects.',
                image: 'https://via.placeholder.com/140',
                price: 199.99,
                manufacturer: 'AI Learning Labs',
                features: ['AI Learning', 'Interactive Projects', 'Comprehensive Content', 'User-Friendly'],
                components: ['AI Coding Blocks', 'Interactive AI Software', 'ProGame Gaming Boards', 'Activity Book with step-by-step instructions', 'Explainer Video Tutorials', 'License key for AI Software', 'Leaderboards', 'Unlimited FUN!'],
                requiredTechnology: 'Computer',
                ageRange: 'Suitable for Ages: 10 – 99',
            },
            {
                id: 7,
                name: 'LifeSkills 360 App',
                description: 'The LifeSkills 360 App is a comprehensive digital platform designed to enhance essential life skills in young learners. The app offers interactive lessons and activities that cover a wide range of life skills, from communication and leadership to financial literacy and emotional intelligence.',
                image: 'https://via.placeholder.com/140',
                price: 49.99,
                manufacturer: 'LifeSkills Tech',
                features: ['Interactive Lessons', 'Wide Range of Topics', 'User-Friendly', 'Progress Tracking'],
                requiredTechnology: 'Android Device',
                ageRange: 'Suitable for Ages: 7 – 99',
            },
            {
                id: 8,
                name: 'LifeSkills 360 Print',
                description: 'The LifeSkills 360 Print is a printed workbook designed to complement the LifeSkills 360 App. It offers a range of activities and exercises that help learners develop essential life skills through offline, hands-on practice.',
                image: 'https://via.placeholder.com/140',
                price: 19.99,
                manufacturer: 'LifeSkills Tech',
                features: ['Hands-On Activities', 'Comprehensive Content', 'Easy to Use'],
                components: ['LifeSkills 360 Workbook', 'Activity Sheets', 'Instructional Guide'],
                ageRange: 'Suitable for Ages: 7 – 99',
            },
            // Add more products as needed
        ];

        // Convert product information to a text format suitable for chat context
<<<<<<< HEAD
        const productContext = productInfo.map(product => {
            ProductName:`${product.name}\nDescription: ${product.description}\nPrice: ${product.price}\nManufacturer: ${product.manufacturer}\nFeatures: ${product.features.join(', ')}\n`
    }).join("\n");
=======
        const productContext = productInfo.map(product => 
            `Product Name: ${product.name}\nDescription: ${product.description}\nPrice: ${product.price}\nManufacturer: ${product.manufacturer}\nFeatures: ${product.features.join(', ')}\n`
        ).join("\n");
>>>>>>> abafe8b3551b36a307ea4b44aa3e5c96fe618a47

        // Merge initial training data with the history from the request
        const extendedHistory = initialTrainingData.concat(history);

        const chat = model.startChat({
            history: extendedHistory,
            generationConfig: generationConfig,
            context: productContext // Add the product context as part of the chat initialization
        });

        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        console.log(responseText);

        res.send({ acknowledged: true, text: responseText });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'An error occurred while processing your request.' });
    }
});

<<<<<<< HEAD
module.exports = chatbot;
=======
module.exports = chatbot;
>>>>>>> abafe8b3551b36a307ea4b44aa3e5c96fe618a47
