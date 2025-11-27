async function ambilDataUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(({ name }) => {
        console.log(name);
    });
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}

export default ambilDataUser;