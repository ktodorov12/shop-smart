export function setSessionData(name, data) {
  sessionStorage.setItem(name, JSON.stringify(data));
}

export function getSessionData(name) {
  const data = JSON.parse(sessionStorage.getItem(name));
  return data || undefined;
}

export function removeSessionData(name) {
  sessionStorage.removeItem(name);
}

export function getUserToken() {
  const userData = getSessionData("user");
  return userData?.accessToken;
}

//Quick fix - pass categories to other components;
export function setCategoryData(category) {
  const categoryData = getSessionData("categories");
  
  if (!categoryData) {
    setSessionData("categories", [{...category, sublist: [...category.sublist]}]);
  } else {
    const hasCategory = categoryData.find((c) => c._id == category._id);

    if (!hasCategory) {
      categoryData.push({...category, sublist: [...category.sublist]});
      setSessionData("categories", categoryData);
    }
  }
}
