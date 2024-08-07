import { API } from "./API.config"

export const GetSummary = async () => {
    const data = await API.get('/summary')
    return data.data
}