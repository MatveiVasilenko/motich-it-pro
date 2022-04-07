import { useState, useEffect } from 'react';

export const getData = async(
   url,
   method,
   body = false
) => {
   const res = await fetch(url, {
       method: method || 'GET',
       headers: {
           "access-control-allow-origin" : "*",
           'Content-Type': 'application/json;charset=UTF-8'
       },
       ...(body ? {
           body: JSON.stringify(body)
       } : {})
   }).then((response) => {
       if (response.status === 200) {
          
       }
       return response
   })
   return await res.json()
}

export const getGridHandlers = ( 
   watchHandler, 
   updateHandler, 
   homeHandler,
   deleteHandler
   ) => {
   
   return {
      buttons: { 
         ...(watchHandler ? {watch: (id, course_id) => watchHandler(id, course_id)} : {}),
         ...(updateHandler ? {update: (id) => updateHandler(id)} : {}),
         ...(homeHandler ? {home: (id, idSub, elem) => homeHandler(id, idSub, elem)} : {}),
         ...(deleteHandler ? {delete: (id) => deleteHandler(id)} : {}),
      }
   }
}

export const getFields = () => {
    return {
      fields : [
         {
            name: 'title',
            type: 'input', 
            title: 'Название курса',
            placeholder: 'Введите название курса'
         },
         {
            name: 'position',
            type: 'input', 
            title: 'Позиция',
            placeholder: 'Укажите позицию курса'
         },
          {
            name: 'img',
            type: 'image', 
            title: 'Выберите картинку',
            placeholder: 'картинка'
         },
         {
            name: 'date',
            type: 'date', 
            title: 'Выберите дату курса',
            placeholder: 'Выберите дату'
         },
         {
            name: 'small_description',
            type: 'article', 
            title: 'Добавить краткое описание',
            placeholder: 'Краткое описание'
         },
         {
            name: 'description',
            type: 'article', 
            title: 'Добавить описание',
            placeholder: 'Описание'
         }
     ] 
    }
 }

 export const getFieldsSubCourses = () => {
    return {
      fields : [
         {
            name: 'title',
            type: 'input', 
            title: 'Название подкурса',
            placeholder: 'Введите название подкурса'
         },
         {
            name: 'open',
            type: 'check', 
            title: 'Бесплатный доступ к подкурсу',
            placeholder: 'статус'
         },
          {
            name: 'position',
            type: 'input', 
            title: 'Позиция',
            placeholder: 'Укажите позицию подкурса'
         },
         //  {
         //    name: 'course_id',
         //    type: 'input', 
         //    title: 'Идентификатор курса',
         //    placeholder: 'id'
         // },
         //  {
         //    name: 'img',
         //    type: 'image', 
         //    title: 'Выберите картинку',
         //    placeholder: 'картинка'
         // },
         {
            name: 'date',
            type: 'date', 
            title: 'Выберите дату курса',
            placeholder: 'Выберите дату'
         },
         {
            name: 'description',
            type: 'article', 
            title: 'Добавить описание',
            placeholder: 'Описание'
         }
     ] 
    }
 }

export const getFieldsModules = (
   role,
   type = 'video',
   hometask = null
 ) => {
    
   const fieldsData = {
      fields : [
         {
            name: 'title',
            type: 'input', 
            title: 'Название модуля (урока)',
            placeholder: 'Введите название урока'
         },
         {
             name: 'open',
             type: 'check', 
             title: 'Бесплатный доступ к уроку',
             placeholder: 'статус'
          },
          {
             name: 'position',
             type: 'input', 
             title: 'Позиция урока',
             placeholder: 'Введите позицию'
          },         
         {
            name: 'description',
            type: 'article', 
            title: 'Добавить описание',
            placeholder: 'описание'
         }
     ] 
   }
   if (type === 'video') {
      fieldsData.fields.push({
         name: 'path',
         type: 'input',
         title: 'Ссылка на видео',
         placeholder: 'Вставить ссылку'
      })
   } else if (type === 'test') {
      fieldsData.fields.push({
         name: 'options',
         type: 'test-constructor',
         title: 'Конструктор тестов'
      })
   }
   if (hometask){
      fieldsData.fields.push({
         name: 'home_title',
         type: 'input',
         title: 'Заголовок домашнего задания'
      })
      fieldsData.fields.push({
         name: 'home_description',
         type: 'article',
         title: 'Описание домашнего задания'
      })
      fieldsData.fields.push({
         name: 'rating',
         type: 'input',
         title: 'Кол-во баллов'
      })
   }

   return fieldsData
}

export const getFieldsAdminAnswers = () => {
   return {
      fields : [
         {
            name: 'link',
            type: 'demotext', 
            title: 'Ссылка на задание',
            placeholder: 'Введите ссылку на задание'
         },
         {
           name: 'comment',
           type: 'demotext', 
           title: 'Комментарий пользователя',
           placeholder: 'Укажите позицию подкурса'
         },
         {
            name: 'comment_auth',
            type: 'article', 
            title: 'Комментарий автора',
            placeholder: 'Комментарии'
         },
         {
            name: 'rating',
            type: 'input', 
            title: 'Рейтинг',
            placeholder: 'рейтинг'
         }
     ] 
    }
}


// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const payDefenderFunc = () => {
   
}

export const transformNumberOnLetter = (number, lang = 'ru') => {
   const letterData = {
      ru: ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К"]
   }

   return letterData[lang][number]
}
