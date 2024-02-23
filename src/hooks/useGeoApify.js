const useGeoApify = () => {

  var requestOptions = {
    method: 'GET',
  };

  fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.GEOAPIFY_API_KEY}`, requestOptions)
    .then((response) => {return response.json();})
    .then((result) => {console.log('userLocationObj:', result)})
    .catch((error) => {console.log('error', error)});
};

export default useGeoApify;