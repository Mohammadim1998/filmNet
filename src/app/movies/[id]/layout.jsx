"use client"

import { useState, useEffect } from "react";
import axios from "axios";

export default function RootLayout({ children }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(d => setUsers(d.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="flex justify-between items-start gap-2 container mx-auto">
            <main>
                {children}
            </main>
            <aside className="w-[20rem] bg-zinc-100 p-4 rounded-lg flex flex-col gap-4">
                {
                    users.map((u, i) => (
                        <div className="bg-zinc-200 rounded p-2" key={i}>{u.name}</div>
                    ))
                }
            </aside>
        </div>
    )
}
