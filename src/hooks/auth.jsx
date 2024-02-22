import { createContext } from "react";
import { useEffect } from "react";

import { useContext, useState } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password })

      const { user, token } = response.data;

      const admin = user.admin === 1
      
      localStorage.setItem("@rocketFood:user", JSON.stringify(user));
      localStorage.setItem("@rocketFood:admin", JSON.stringify(admin));
      localStorage.setItem("@rocketFood:token", token);

      api.defaults.headers.common['authorization'] = `Bearer ${token}`;
      setData({ user, token, admin });


    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi passível logar!")

        console.error(error);
      }
    }
  }
  
  async function Adm({admin}){
    user.admin = response.data.admin;

  }

  async function updateProfile({user, avatarFile}){
    try{
      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem("@rocketFood:user", JSON.stringify(user));

      setData({user, token: data.token})
      alert("Perfil atualizado com sucesso!")

    }catch{
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi passível logar!")

        console.error(error);
      }
    }

  }

  function signOut() {
    
    localStorage.removeItem("@rocketFood:user");
    localStorage.removeItem("@rocketFood:token");
    localStorage.removeItem("@rocketFood:admin");

    setData({})
  }

  useEffect(() => {

    const user = localStorage.getItem("@rocketFood:user");
    const token = localStorage.getItem("@rocketFood:token");
    const admin = localStorage.getItem("@rocketFood:admin");

    if (user && token) {
      api.defaults.headers.common['authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
        admin: JSON.parse(admin),
      });
    }
  }, [])

  return (
    <AuthContext.Provider value={
      {
        signIn,
        signOut,
        updateProfile,
        user: data.user,
        admin: data.admin,
        
      }}>
      {children}

    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth
}