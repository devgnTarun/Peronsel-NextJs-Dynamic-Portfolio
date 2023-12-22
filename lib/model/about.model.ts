import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    experience: {
        type: Number
    },
    project: {
        type: Number
    },
    seo: {
        type: Number
    },
    skills: [{ name: { type: String } }]
})

const About = mongoose.models.About || mongoose.model('About', aboutSchema);

export default About; 