"use server"

import { connect } from "../utils/connect"

export async function AddUser(userID, username){

    const db = connect()

        db.query(`INSERT INTO users (user_id, user_username)
                VALUES ($1, $2)
                on conflict (user_id) do nothing`, [userID, username])
}