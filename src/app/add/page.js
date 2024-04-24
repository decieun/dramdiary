'use client'

import { useRouter } from "next/navigation"

export default function Add() {
  const router = useRouter();
  return <form onSubmit={async evt => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const content = evt.target.content.value;
    const resp = await fetch('http://localhost:9090/items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, content})
    });
    const diary = await resp.json();
    console.log("file: page.js:19 ~ Create ~ diary:", diary)
    router.push(`/diary/${diary.id}`);
    router.refresh();
  }}>
    <h2>Create</h2>
    <p><input type="text" name="title" placeholder="title" /></p>
    <p><input type="text" name="content" placeholder="content" /></p>
    <p><input type="submit" value="create" /></p>
  </form>
}