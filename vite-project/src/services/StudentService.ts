import axios from 'axios'

const API_URL = 'https://dv-student-backend-2019.appspot.com/students'

export const getStudents = () => {
  return axios.get(API_URL).then(response => response.data)
}
