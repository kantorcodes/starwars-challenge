export default {
    'FETCHING_DATA': 'FETCHING_DATA',
    'FETCH_PEOPLE': 'FETCH_PEOPLE',
    'FETCH_FILMS': 'FETCH_FILMS',
    'FETCH_STARSHIPS': 'FETCH_STARSHIPS',
    'FETCH_VEHICLES': 'FETCH_VEHICLES',
    'FETCH_SPECIES': 'FETCH_SPECIES',
    'FETCH_PLANETS': 'FETCH_PLANETS',
    'UPDATE_IS_MOBILE': 'UPDATE_IS_MOBILE',
    'UPDATE_CURRENT_WIDTH': 'UPDATE_CURRENT_WIDTH',
    'UPDATE_LOCATION': 'UPDATE_LOCATION'
}

export const categoryListMap = {
    people: {
        title: 'name',
        description: 'birth_year'
    },
    films: {
        title: 'title',
        description: 'opening_crawl'
    },
    starships: {
        title: 'name',
        description: 'model'
    },
    vehicles: {
        title: 'name',
        description: 'model',
    },
    planets: {
        title: 'name',
        description: 'diameter',
    },
    species: {
        title: 'name',
        description: 'classification',
    }
}