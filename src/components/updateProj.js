function updateProj(ID, proj, mode) {
  const projData = {
    id: ID,
    proj: proj,
  };

  if (mode) {
    localStorage.setItem(`proj${ID}`, JSON.stringify(projData));
  } else {
    localStorage.removeItem(`proj${ID}`);
    console.log(ID)
  }
}

export default updateProj;
