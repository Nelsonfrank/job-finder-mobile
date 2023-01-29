import { FiArrowLeft, FiBell } from "react-icons/fi";

// components
import Button from "@/components/button";
import Head from "next/head";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import { useRouter } from "next/router";

const JobDetails = () => {
  const job = {
    company: "Telegram",
    companyLogo: "/img/telegram.png",
    location: "Jakarta Indonesia",
    position: "Junior UI Designer",
    type: "onsite",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus atque quo, at deserunt, labore recusandae sint quod modi reiciendis ad mollitia quia delectus ab amet.",
    tags: ["FullTime", "Internship", "Entry Level"],
  };

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Details</title>
        <meta name="description" content="Job finder app mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-gray-100 px-6 pt-10 pb-16">
        <div className="flex items-center justify-between">
          <div>
            <Button
              Icon={<FiArrowLeft className="text-xl" />}
              onClick={handleGoBack}
            />
          </div>
          <div>
            <h2 className="text-xl font-medium">Details</h2>
          </div>
          <div>
            <Button Icon={<FiBell className="text-xl" />} />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex">
            <div>
              <div className="mr-4  rounded-lg bg-gray-200 p-3">
                <Image
                  src={job.companyLogo}
                  alt="telegram"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <h4 className=" font-medium capitalize">{job.company}</h4>
              <h2 className="mb-1 text-lg font-bold capitalize">
                {job.position}
              </h2>
              <p className="text-sm font-light capitalize text-zinc-400">
                {job.location} - {job.type}
              </p>
            </div>
          </div>
          <div className="rounded-md  p-2 ">
            <button className="text-2xl outline-none">
              <FaBookmark />
            </button>
          </div>
        </div>
        <div className="my-4">
          <p className="  text-sm text-zinc-400">
            Telegram Messenger is a globally accessible freemium,
            cross-platform, encrypted, cloud-based and centralized instant
            messaging service. The application also provides optional end-to-end
            encrypted chats, popularly known as secret chat and video calling,
            VoIP, file sharing and several other features.
          </p>
        </div>
      </main>
    </>
  );
};

export default JobDetails;
