import axios from "axios";
const server_url = "http://localhost:3001";
export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === parseInt(value));
}

// GET FUNCTIONS
export const getMaturaId = (predmet_id, godina, raizna, sezona) => {
  return fetch(
    `${server_url}/matura_id?predmet_id=${predmet_id}&godina=${godina}&razina=${raizna}&sezona=${sezona}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwtToken"),
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      if (!response.isSuccess) {
        return alert(response.msg);
      } else {
        return response.data;
      }
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getPredmetiList = () => {
  return fetch(`${server_url}/predmet/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
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

export const getPredmetFromPredmetId = (predmet_id) => {
  return fetch(`${server_url}/predmet?predmet_id=${predmet_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No predmet found");
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      alert(err);
      return null;
    });
};

export const getZadatakVrstaList = (matura_id) => {
  return fetch(`${server_url}/zadatak_vrsta/all?matura_id=${matura_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
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

export const getOdjeljakList = (matura_id) => {
  return fetch(`${server_url}/odjeljak/all?matura_id=${matura_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
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

export const getNadzadatakVrstaList = (matura_id) => {
  return fetch(`${server_url}/nadzadatak_vrsta/all?matura_id=${matura_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
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
  return fetch(`${server_url}/zadatak/all?matura_id=${matura_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
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
  return fetch(`${server_url}/zadatak/?zadatak_id=${zadatak_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
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
  return fetch(`${server_url}/rjesenja/?zadatak_id=${zadatak_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
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
    `${server_url}/nadzadatak/zadatci?nadzadatak_id=${nadzadatak_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwtToken"),
      },
    }
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
  slika,
  audio,
  matura_id,
  odjeljak_id,
  task
) => {
  let data = {
    id: nadzadatak_id,
    vrsta_id: vrsta_id,
    broj_nadzadatka: broj_nadzadatka,
    nadzadatak_tekst: nadzadatak_tekst,
    odjeljak_id: odjeljak_id,
    task: task,
  };

  if (slika) {
    axios
      .post(
        `${server_url}/file-upload?table=nadzadatak&table_id=${nadzadatak_id}&matura_id=${matura_id}&type=slika`,
        slika,
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((res) => {
        console.log("Axios response: ", res);
      });
  }

  if (audio) {
    axios
      .post(
        `${server_url}/file-upload?table=nadzadatak&table_id=${nadzadatak_id}&matura_id=${matura_id}&type=audio`,
        audio,
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((res) => {
        console.log("Axios response: ", res);
      });
  }

  return fetch(`${server_url}/nadzadatak`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
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
  slika,
  broj_bodova,
  primjer,
  odjeljak_id
) => {
  const data = {
    id: id,
    vrsta_id: vrsta_id,
    matura_id: matura_id,
    broj_zadatka: broj_zadatka,
    zadatak_tekst: zadatak_tekst,
    broj_bodova: broj_bodova,
    primjer: primjer,
    odjeljak_id: odjeljak_id,
  };

  if (slika) {
    axios
      .post(
        `${server_url}/file-upload?table=zadatak&table_id=${id}&matura_id=${matura_id}&type=slika`,
        slika,
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((res) => {
        console.log("Axios response: ", res);
      });
  }

  return fetch(`${server_url}/zadatak`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
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
      alert(err, "update zadatak");
      return null;
    });
};

export const updateRjesenje = (
  rjesenje_id,
  rjesenje_tekst,
  slika,
  slovo,
  tocno,
  broj_bodova,
  index,
  matura_id
) => {
  const data = {
    rjesenje_id: rjesenje_id,
    rjesenje_tekst: rjesenje_tekst,
    slovo: slovo,
    tocno: tocno,
    broj_bodova: broj_bodova,
    index: index,
  };

  if (slika) {
    axios
      .post(
        `${server_url}/file-upload?table=rjesenje&table_id=${rjesenje_id}&matura_id=${matura_id}&type=slika`,
        slika,
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((res) => {
        console.log("Axios response: ", res);
      });
  }

  return fetch(`${server_url}/rjesenje?=${rjesenje_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
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

export const lock = (id, type) => {
  return fetch(`${server_url}/lock?id=${id}&table=${type}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Couldnt update lock");
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
    nadzadatak_id: nadzadatak_id,
    broj_bodova: broj_bodova,
    primjer: primjer,
  };

  return fetch(`${server_url}/zadatak`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
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
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
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
  slovo,

  rjesenje_tekst,
  slika_path,
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
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
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

export const deleteRjesenje = (rjesenje_id, prompt = true) => {
  if (
    !prompt ||
    window.confirm(`Jesi li siguran da zelis izbrisat rjesenje?`)
  ) {
    return fetch(`${server_url}/rjesenje?rjesenje_id=${rjesenje_id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    })
      .then((response) => {
        if (response) {
          return response;
        }
        throw new Error("Couldnt delete");
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        alert(err, "errorrr");
        return false;
      });
  }
};

export const deleteZadatak = async (zadatak_id, prompt = true) => {
  if (!prompt || window.confirm(`Jesi li siguran da zelis izbrisat zadatak?`)) {
    return fetch(`${server_url}/zadatak?zadatak_id=${zadatak_id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
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
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
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

export const deleteFile = async (table, table_id, type) => {
  if (window.confirm(`Jesi li siguran da zelis izbrisat datoteku?`)) {
    return fetch(
      `${server_url}/deleteFile?table=${table}&table_id=${table_id}&type=${type}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      }
    )
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
