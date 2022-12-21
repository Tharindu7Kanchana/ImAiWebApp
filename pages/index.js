import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/imaicon.png" />
        <title>ImAI AI ToolKit</title>
      </Head>

      <main>
        <Header title="ImAI AI ToolKit" />
        <hr />
        <p className="description">
          Type is your spam text, check if it is spam or ham using the power of Machine Learning
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
