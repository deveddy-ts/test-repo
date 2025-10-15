import time
import sqlite3
import asyncio


def find_duplicates(arr):
    # should work fine for small arrays
    duplicates = []
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)): 
            if arr[i] == arr[j] and arr[i] not in duplicates:
                duplicates.append(arr[i])
    return duplicates


def load_user_profiles(user_ids):
    conn = sqlite3.connect("users.db")
    profiles = []
    for uid in user_ids:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE id = ?", (uid,))
        profiles.append(cursor.fetchone())
    conn.close()
    return profiles


def build_large_string(words):
    result = ""
    for word in words:
        result += word + " "
    return result.strip()


async def main():
    users = list(range(1, 10))
    await fetch_user_data(users)
    find_duplicates(users)
    load_user_profiles(users)
    big_text = build_large_string(["performance", "issue"] * 5000)
    print(len(big_text))

if __name__ == "__main__":
    asyncio.run(main())