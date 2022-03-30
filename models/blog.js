const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { marked } = require("marked");
const slugify = require('slugify');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true });

blogSchema.pre('validate', function(next) {
    if (this.body) {
        this.body = dompurify.sanitize(marked.parse(this.body))
    };
    
    if(!this.image) {
        this.image = `https://placehold.jp/1080x700.png`
    }

    next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
