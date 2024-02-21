import React, { ChangeEvent, useState } from 'react';
import s from './admin.module.scss';

const Admin = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleFileUpload = () => {
    if (selectedFiles.length >  0) {
      // Здесь можно реализовать загрузку файлов на сервер
      console.log('Файлы для загрузки:', selectedFiles);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((file, i) => i !== index);
    setSelectedFiles(newFiles);
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.admin__container}>
          <div className={s.user__container}>
            <div className={s.user__contacts}>
              <h1>Contacts</h1>
              <div className={s.user__info}>
                <input type="text" className={s.contact__input} placeholder='Name Surname'/>
                <input type="text" className={s.contact__input} placeholder='Date of birth'/>
              </div>
            </div>
            <div className={s.user__contacts}>
              <h1>Information</h1>
              <div className={s.user__info}>
                <input type="number" className={s.contact__input} placeholder='Number'/>
                <input type="email" className={s.contact__input} placeholder='Email'/>
              </div>
            </div>
          </div>
        
          <div className={s.car__container}>
            <div className={s.car__info}>
              <h1>Aston Martin Vantage</h1>
              <div className={s.car__info__inputs}>
                <input type="text" className={s.car__input} placeholder='Brand' />
                <input type="text" className={s.car__input} placeholder='Model' />
              </div>
            </div>
            <div className={s.car__info}>
              <h1>Specifications</h1>
              <div className={s.car__info__inputs}>
                <input type="text" className={s.car__input} placeholder='Security Deposit' />
                <input type="text" className={s.car__input} placeholder='Includes' />
                <input type="text" className={s.car__input} placeholder='Engine' />
                <input type="text" className={s.car__input} placeholder='0-60mph in' />
                <input type="text" className={s.car__input} placeholder='MSRP' />
                <input type="text" className={s.car__input} placeholder='Horse Power' />
              </div>
            </div>
          </div>
          <div className={s.photo__container}>
            <div className={s.photo__title}>
              <h1>Photo</h1>
              <h2>+ 70% to the views</h2>
            </div>
            <div className={s.photo__select} onClick={() => document.getElementById('fileInput')?.click()}>
              <img src='/selectBtn.svg' alt="" />
              <h1>Select a photo</h1>
              <h2>or drag it to this area</h2>
              <input
                type="file"
                id="fileInput"
                multiple
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
            <p className={s.photo__p}>Image files, maximum size   200 KB</p>
            <div className={s.photo__selected}>
              {selectedFiles.map((file, index) => (
                <div key={index} className={s.photo__selectedItem}>
                  <span>{file.name}</span>
                  <button onClick={() => removeFile(index)}>Remove</button>
                </div>
              ))}
            </div>
            <div className={s.photo__download}>
              <input type="text" name="" className={s.photo__link} placeholder='Or download it from the link' />
              <button onClick={handleFileUpload}>Download</button>
            </div>
          </div>

          <div className={s.admin__change}>
            <button className={s.undo}>Undo changes</button>
            <button className={s.make}>Make changes</button>
          </div>
        </div>
        <ul className={s.admin__nav}>
          <li>Client Profile</li>
          <li>Documents and data</li>
          <li>Settings</li>
        </ul>
      </div>
    </>
  );
};

export default Admin;