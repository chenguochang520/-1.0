import request from '@/utils/request'

export const getHouse = () => {
  return request({
    url: 'houses/condition?id=AREA%7C88cff55c-aaa4-e2e0'
  })
}

export const getCityMessage = ({ name }) => {
  return request({
    url: `/area/info?name=${name}`
  })
}

// 获取成市房屋信息

export const getHouseMessage = ({ id }) => {
  return request({
    url: '/houses/condition',
    params: { id }
  })
}
