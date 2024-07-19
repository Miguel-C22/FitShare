import { UserInfo } from "@/schema/userInfo";

async function postUserData(data: UserInfo) {

  try {
    const response = await fetch('http://localhost:3000/api/users/postNewUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.log('Network response was not ok');
    }

    const result = await response.json();
    console.log('Data successfully posted:', result);
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

export default postUserData