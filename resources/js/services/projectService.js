import axios from 'axios'

export default {
    index() {
        return axios.get('/api/project')
    },
    create(project) {
        return axios.post('/api/project', project)
    }
}