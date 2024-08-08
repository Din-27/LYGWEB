import { API } from "./API.config"

export const GetDetailTransaction = async (props) => {
    const data = await API.post('/detail-transaction', { ...props })
    return data.data
}