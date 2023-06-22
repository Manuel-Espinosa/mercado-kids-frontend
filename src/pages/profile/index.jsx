import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { FatherData, ChildData,BankAccount } from "../../components/ProfileData";
import { getUser } from "../../utils/getUser";
import useUser from "../../hooks/useUser";

const ProfilePage = () => {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const data = await getUser(user); // Fetch the user data from the appropriate source
          console.log(data);
          setUserInfo(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <Layout>
      {userInfo && (
        <>
          <FatherData userInfo={userInfo} />
          <ChildData userInfo={userInfo} />
          <BankAccount userInfo={userInfo} />

        </>
      )}
    </Layout>
  );
};

export default ProfilePage;
