import Senators from './data/senators'

export const republicans = () => {
  // return REPLACE_ME_WITH_CODE
  return Senators.filter(senator => senator.party === 'Republican')
}

export const democrats = () => {
  // return REPLACE_ME_WITH_CODE
  return Senators.filter(senator => senator.party === 'Democrat')
}

export const independents = () => {
  // return REPLACE_ME_WITH_CODE
  return Senators.filter(senator => senator.party === 'Independent')
}

export const males = () => {
  // return REPLACE_ME_WITH_CODE
  return Senators.filter(senator => senator.person.gender === 'male')
}

export const females = () => {
  // return REPLACE_ME_WITH_CODE
  return Senators.filter(senator => senator.person.gender === 'female')
}

export const byState = (state = 'UT') => {
  // return REPLACE_ME_WITH_CODE
  return Senators.filter(senator => senator.state === state)
}

export const mapping = () => {
  // return REPLACE_ME_WITH_CODE
  return Senators.map(senator => ({
    firstName: senator.person.firstname,
    lastName: senator.person.lastname,
    party: senator.party,
    gender: senator.person.gender
  }))
}

export const birthplaceSeniorSenator = () => {
  // return REPLACE_ME_WITH_CODE
  return byState('UT').filter(senator => senator.senator_rank === 'senior').reduce((prev, current) => current)
}


const REPLACE_ME_WITH_CODE = false
