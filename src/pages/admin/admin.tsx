import React, { useState } from 'react';
import s from './admin.module.scss';

const Admin: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFilesMultiple, setSelectedFilesMultiple] = useState<File[]>([]);

  const handleFileChangeSingle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length >  0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileChangeMultiple = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFilesMultiple(Array.from(event.target.files));
    }
  };

  const handleFileUploadSingle = () => {
    if (selectedFile) {
      // Здесь можно реализовать загрузку файла на сервер
      console.log('Файл для загрузки:', selectedFile);
    }
  };

  const handleFileUploadMultiple = () => {
    if (selectedFilesMultiple.length >  0) {
      // Здесь можно реализовать загрузку файлов на сервер
      console.log('Файлы для загрузки:', selectedFilesMultiple);
    }
  };

  const removeFileMultiple = (index: number) => {
    setSelectedFilesMultiple(selectedFilesMultiple.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.admin__container}>
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
                <input type="text" className={s.car__input} placeholder='Seats' />
                <input type="text" className={s.car__input} placeholder='Doors' />
                <input type="text" className={s.car__input} placeholder='Automatic' />
                <input type="text" className={s.car__input} placeholder='MPG' />
                
                <input type="text" className={s.car__input} placeholder='Security Deposit' />
                <input type="text" className={s.car__input} placeholder='Includes' />
                <input type="text" className={s.car__input} placeholder='Engine' />
                <input type="text" className={s.car__input} placeholder='0-60mph in' />
                <input type="text" className={s.car__input} placeholder='MSRP' />
                <input type="text" className={s.car__input} placeholder='Horse Power' />
              </div>
            </div>
          </div>

          <div className={s.car__container}>
            <div className={s.car__info}>
              <h1>Tariffs</h1>
              <div className={s.car__info__inputs}>
                <input type="text" className={s.car__input} placeholder='Payment' />
                <input type="text" className={s.car__input} placeholder='Refueling' />
                <input type="text" className={s.car__input} placeholder='Washing the car' />
                <input type="text" className={s.car__input} placeholder='Picking up the car' />
              </div>
            </div>
          </div>

          <div className={s.photo__container}>
            <div className={s.photo__title}>
              <h1>Photo</h1>
              <h2>+   70% to the views</h2>
            </div>
            <div className={s.photo__select} onClick={() => document.getElementById('fileInputSingle')?.click()}>
              <img src='/selectBtn.svg' alt="" />
              <h1>Select a photo</h1>
              <h2>or drag it to this area</h2>
              <input
                type="file"
                id="fileInputSingle"
                onChange={handleFileChangeSingle}
                style={{ display: 'none' }}
              />
            </div>
            <p className={s.photo__p}>Image files, maximum size   200 KB</p>
            <div className={s.photo__selected}>
              {selectedFile && <div className={s.photo__selectedItem}>{selectedFile.name}</div>}
            </div>
            <div className={s.photo__download}>
              <input type="text" name="" className={s.photo__link} placeholder='Or download it from the link' />
              <button onClick={handleFileUploadSingle}>Download</button>
            </div>
          </div>

          <div className={s.photo__container}>
            <div className={s.photo__title}>
              <h1>Multiple Photos</h1>
              <h2>+   70% to the views</h2>
            </div>
            <div className={s.photo__select} onClick={() => document.getElementById('fileInputMultiple')?.click()}>
              <img src='/selectBtn.svg' alt="" />
              <h1>Select photos</h1>
              <h2>or drag them to this area</h2>
              <input
                type="file"
                id="fileInputMultiple"
                multiple
                onChange={handleFileChangeMultiple}
                style={{ display: 'none' }}
              />
            </div>
            <p className={s.photo__p}>Image files, maximum size   200 KB</p>
            <div className={s.photo__selected}>
              {selectedFilesMultiple.map((file, index) => (
                <div key={index} className={s.photo__selectedItem}>
                  <span>{file.name}</span>
                  <button onClick={() => removeFileMultiple(index)}>Remove</button>
                </div>
              ))}
            </div>
            <div className={s.photo__download}>
              <input type="text" name="" className={s.photo__link} placeholder='Or download it from the link' />
              <button onClick={handleFileUploadMultiple}>Download</button>
            </div>
          </div>

          <div className={s.admin__change}>
            <button className={s.undo}>Undo changes</button>
            <button className={s.make}>Creacte car</button>
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






          {/* <div className={s.user__container}>
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
          </div> */}