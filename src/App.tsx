import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Leozerassauro.png",
      name: "Leonardo Girardi",
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa ð"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð"},
      {type: "link", content:"jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-09-25 20:00.00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/1TATO.png",
      name: "JosÃ© Neto",
      role: "Mobile Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa ð"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð"},
      {type: "link", content:"jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-09-23 09:35.00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </div>
  );
}
