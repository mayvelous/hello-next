module.exports = {
    target: 'serverless', // comment this line if doing npm run export to generate static html export cmd    
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/p/975': { page: '/post', query: { id: 975 } },
            '/p/504': { page: '/post', query: { id: 504 } },
            '/p/481': { page: '/post', query: { id: 481 } }
        }
    }
}