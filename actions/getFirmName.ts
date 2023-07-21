import { Options } from '@/types'
import axios from 'axios'

export const getFirmName = async () => {
  let firmNameData: Options[] = []

  const response = await axios.get('/api/creditors')

  const data = response.data

  data.map((item: any) =>
    firmNameData.push({ name: item.firmName, id: item.id })
  )

  return firmNameData
}
