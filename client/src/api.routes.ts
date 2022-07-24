const BASE_URL = ''

const APIS = {
    'GET_ALL_ADVICE': `${BASE_URL}/advice/all`,
    'GET_ONE_ADVICE': (aid: string) => `${BASE_URL}/advice/get?aid=${aid}`,
    'CREATE_ADVICE': `${BASE_URL}/advice/create`,
    'GET_COLLEGE': `${BASE_URL}/college/all`,
    'FIND_COLLEGE': `${BASE_URL}/college/seek`,
    'INIT_USER': `${BASE_URL}/user/create`
}

export default APIS