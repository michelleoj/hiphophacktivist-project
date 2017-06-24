export const FETCH_SHELTERS = 'FETCH_SHELTERS';
export const RECEIVE_SHELTERS = 'RECEIVE_SHELTERS';
const appToken = 'wcZxN03tedKhA6e528L5K9LsQ'

export const receiveShelterObjects = (shelters) => {
  return {
    type: RECEIVE_SHELTERS,
    shelters: shelters,
  };
};

export const fetchShelters = (query) => {
  return function(dispatch) {
    query = query || '';

    fetch('https://data.cityofnewyork.us/resource/386y-9exk.json?$$app_token=' + appToken + '&' + query).then((resp) => {

      console.log('resp: ', resp);
      if (resp.ok) {
        resp.json().then((jsonObj) => {
          dispatch(receiveShelterObjects(jsonObj));
        });
      }
    }).catch((err) => {
      console.log('something went wrong');
    });
  }
}
