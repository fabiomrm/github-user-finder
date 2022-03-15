import './styles.css';
import React, { useState } from 'react';
import axios from 'axios';

type FormData = {
  name: string;
};

type GithubUser = {
  url: string;
  avatar_url: string;
  followers: number;
  location: string;
  name: string;
};

export const GithubSearch = () => {
  const [name, setName] = useState<GithubUser>();

  const [formData, setFormData] = useState<FormData>({
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e?.target.name;
    const value = e.target.value;
    console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((res) => setName(res.data))
      .catch((err) => {
        setName(undefined);
        setFormData({ name: '' });
      });
  };

  return (
    <div className="github-search-container">
      <div className="github-search-card">
        <div className="github-search-card-title">
          <h1>Encontre um perfil Github</h1>
        </div>
        <div className="github-search-card-form-area">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="form-container-input-area">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className="search-input"
                  placeholder="Usuário Github"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>
      {name && (
        <div className="github-result-card">
          <div className="image-container">
            <img src={name?.avatar_url} alt={name?.name} />
          </div>
          <div className="info-container">
            <h2>Informações</h2>
            <div className="info-item">
              <h3>Perfil:</h3>
              <p>{name?.url}</p>
            </div>
            <div className="info-item">
              <h3>Seguidores:</h3>
              <p>{name?.followers}</p>
            </div>
            <div className="info-item">
              <h3>Localidades:</h3>
              <p>{name?.location}</p>
            </div>
            <div className="info-item">
              <h3>Nome:</h3>
              <p>{name?.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
