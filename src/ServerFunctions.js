const server_url = 'http://localhost:3001'


export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === parseInt(value));
  }


export const getMaturaId = (predmet_id, godina, raizna, sezona) => { 
    return fetch(`${server_url}/matura_id?predmet_id=${predmet_id}&godina=${godina}&razina=${raizna}&sezona=${sezona}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            throw new Error('No matura found')
            
        })
        .then(data => {return data})
        .catch(err => {alert(err); return null})
}

export const getPredmetiList = () => { 
    return fetch(`${server_url}/predmet/all`)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            throw new Error('No predmeti list found')
            
        })
        .then(data => {return data})
        .catch(err => {alert(err); return null})
}

export const getZadatakVrstaList = () => { 
    return fetch(`${server_url}/zadatak_vrsta/all`)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            throw new Error('No zadatak_vrsta list found')
            
        })
        .then(data => {return data})
        .catch(err => {alert(err); return null})
}

export const getNadzadatakVrstaList = () => { 
    return fetch(`${server_url}/nadzadatak_vrsta/all`)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            throw new Error('No nadzadatak_vrsta list found')
            
        })
        .then(data => {return data})
        .catch(err => {alert(err); return null})
}

export const getZadatciFromMatura = (id) => { 
    return fetch(`${server_url}/matura/zadatci?matura_id=${id}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }
            throw new Error('No zadatci found')
            
        })
        .then(data => {return data})
        .catch(err => {alert(err); return null})
 }