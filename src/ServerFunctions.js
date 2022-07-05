const server_url = "http://localhost:3001";

export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === parseInt(value));
}

// GET FUNCTIONS
export const getMaturaId = (predmet_id, godina, raizna, sezona) => {
  return fetch(
    `${server_url}/matura_id?predmet_id=${predmet_id}&godina=${godina}&razina=${raizna}&sezona=${sezona}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No matura found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getPredmetiList = () => {
  return fetch(`${server_url}/predmet/all`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No predmeti list found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getZadatakVrstaList = () => {
  return fetch(`${server_url}/zadatak_vrsta/all`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No zadatak_vrsta list found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getNadzadatakVrstaList = () => {
  return fetch(`${server_url}/nadzadatak_vrsta/all`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No nadzadatak_vrsta list found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getZadatakAll = (matura_id) => {
  return fetch(`${server_url}/zadatak/all?matura_id=${matura_id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No zadatci found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getZadatak = (zadatak_id) => {
  return fetch(`${server_url}/zadatak/?zadatak_id=${zadatak_id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No zadatak found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getRjesenja = (zadatak_id) => {
  return fetch(`${server_url}/rjesenja/?zadatak_id=${zadatak_id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No rjesenja found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getNadzadatakZadatci = (nadzadatak_id) => {
  return fetch(
    `${server_url}/nadzadatak/zadatci?nadzadatak_id=${nadzadatak_id}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No nadzadatak zadatci found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

// UPDATE FUNCTIONS

export const updateNadzadatak = (
  nadzadatak_id,
  vrsta_id,
  broj_nadzadatka,
  nadzadatak_tekst,
  slika_path,
  audio_path
) => {
  let data = {
    id: nadzadatak_id,
    vrsta_id: vrsta_id,
    broj_nadzadatka: broj_nadzadatka,
    nadzadatak_tekst: nadzadatak_tekst,
    slika_path: slika_path,
    audio_path: audio_path,
  };

  return fetch(`${server_url}/nadzadatak`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Couldnt update nadzadatak");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const updateZadatak = (
  id,
  vrsta_id,
  matura_id,
  broj_zadatka,
  zadatak_tekst,
  slika_path,
  broj_bodova,
  primjer,
  rjesenjaList
) => {
  const data = {
    id: id,
    vrsta_id: vrsta_id,
    matura_id: matura_id,
    broj_zadatka: broj_zadatka,
    zadatak_tekst: zadatak_tekst,
    slika_path: slika_path,
    broj_bodova: broj_bodova,
    primjer: primjer,
    rjesenjaList: rjesenjaList,
  };

  return fetch(`${server_url}/zadatak`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Couldnt update zadatak");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const updateRjesenje = (
  rjesenje_id,
  matura_id,
  rjesenje_tekst,
  zadatak_id,
  slika_path,
  slovo,
  tocno,
  broj_bodova
) => {
  const data = {
    matura_id: matura_id,
    rjesenje_tekst: rjesenje_tekst,
    zadatak_id: zadatak_id,
    slovo: slovo,
    tocno: tocno,
    slika_path: slika_path,
    broj_bodova: broj_bodova,
  };

  return fetch(`${server_url}/rjesenje?=${rjesenje_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Couldnt update rjesenje");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

// POST FUNCTIONS

export const postZadatak = (
  matura_id,
  nadzadatak_id,
  vrsta_id,
  broj_zadatka,
  zadatak_tekst,
  slika_path,
  broj_bodova,
  primjer
) => {
  const data = {
    vrsta_id: vrsta_id,
    matura_id: matura_id,
    broj_zadatka: broj_zadatka,
    zadatak_tekst: zadatak_tekst,
    slika_path: slika_path,
    nadzadatak_id: nadzadatak_id,
    broj_bodova: broj_bodova,
    primjer: primjer,
  };

  return fetch(`${server_url}/zadatak`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Couldnt update nadzadatak");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const postNadzadatak = (
  matura_id,
  vrsta_id,
  broj_nadzadatka,
  nadzadatak_tekst,
  slika_path,
  audio_path
) => {
  const data = {
    vrsta_id: vrsta_id,
    matura_id: matura_id,
    broj_nadzadatka: broj_nadzadatka,
    nadzadatak_tekst: nadzadatak_tekst,
    slika_path: slika_path,
    audio_path: audio_path,
  };

  return fetch(`${server_url}/nadzadatak`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Couldnt update nadzadatak");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const postRjesenje = (
  matura_id,
  zadatak_id,
  rjesenje_tekst,
  slika_path,
  slovo,
  tocno,
  broj_bodova
) => {
  const data = {
    matura_id: matura_id,
    rjesenje_tekst: rjesenje_tekst,
    zadatak_id: zadatak_id,
    slovo: slovo,
    tocno: tocno,
    slika_path: slika_path,
    broj_bodova: broj_bodova,
  };

  return fetch(`${server_url}/rjesenje`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Couldnt post rjesenje");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

// DEL FUNCTIONS

export const del = (type, id) => {
  if (window.confirm(`Jesi li siguran da zelis izbrisat ${type}?`)) {
    return fetch(`${server_url}/delete?id=${id}&type=${type}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Couldnt delete");
      })
      .then((data) => {
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  }
};

export const deleteRjesenje = (rjesenje_id) => {
  if (window.confirm(`Jesi li siguran da zelis izbrisat rjesenje?`)) {
    return fetch(`${server_url}/rjesenje?rjesenje_id=${rjesenje_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Couldnt delete");
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  }
};

export const deleteZadatak = async (zadatak_id) => {
  if (window.confirm(`Jesi li siguran da zelis izbrisat zadatak?`)) {
    return fetch(`${server_url}/zadatak?zadatak_id=${zadatak_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Couldnt delete");
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  }
};

export const deleteNadzadatak = async (nadzadatak_id) => {
  if (window.confirm(`Jesi li siguran da zelis izbrisat nadzadatak?`)) {
    return fetch(`${server_url}/nadzadatak?nadzadatak_id=${nadzadatak_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Couldnt delete");
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  }
};
