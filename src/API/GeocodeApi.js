import axios from 'axios';
export function getStateAndCity(zipcode) {
    return axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}`)
        .then(result => {
            let data = {
                state: '',
                city: '',
                lat:'',
                lng:''
            } 
            let address_components = result.data.results[0].address_components;
            data.lat =result.data.results[0].geometry.location.lat;
            data.lng =result.data.results[0].geometry.location.lng;   
             address_components.map(component => {
                let types = component.types;
                 types.map(type => {
                    if (type === 'administrative_area_level_1')
                        data.state = component.long_name
                    if (type === 'locality')
                        data.city = component.long_name
                    else if(type === 'administrative_area_level_2')
                        data.city = component.long_name
                })
            })
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}
