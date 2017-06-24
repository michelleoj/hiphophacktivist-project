export const FETCH_SHELTERS = 'FETCH_SHELTERS';
export const RECEIVE_SHELTERS = 'RECEIVE_SHELTERS';
const appToken = 'wcZxN03tedKhA6e528L5K9LsQ'
const endpoint = 'https://data.cityofnewyork.us/resource/386y-9exk.json'


// regular actions
export const receiveShelterObjects = (shelters) => {
  return {
    type: RECEIVE_SHELTERS,
    shelters: shelters,
  };
};

// thunk actions
export const fetchShelters = (query) => {
  return function(dispatch) {
    query = query || '';

    fetch('https://data.cityofnewyork.us/resource/386y-9exk.json?$$app_token=' + appToken + '&' + query)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((jsonObj) => {
          dispatch(receiveShelterObjects(jsonObj));
        });
      }
    })
    .catch((err) => {
      console.log('something went wrong');
    });
  }
}

export const fetchSheltersForSearch = (query) => {
  return function(dispatch) {
    query = query || '';

    fetch(`${endpoint}?$$app_token=${appToken}&$where=(description LIKE %${query}% OR organizationname LIKE %${query}%)`)
    .then(response => {
      response.json().then(json => {
        dispatch(receiveShelterObjects(json));
      });
    })
    .catch(err => {
      console.log(`Something went wrong: ${err.message}`);
    });
  }
}

export const fetchShelterInfo = (query) => {
  return function(dispatch) {
    query = query || '';

    fetch(`${endpoint}?$app_token${appToken}&$where=organizationname = ${query}`)
      .then(response => {
        response.json().then(json => {
          // all responses are enveloped in arrays, so we need to pop the stack
          // to get the organization object.
          const org = (response.length > 0) ? response.pop() : null;
          dispatch(receiveShelterObjects(org));
        });
      })
      .catch(err => {
        console.log(`Something went wrong: ${err.message}`);
      });
  }
}
