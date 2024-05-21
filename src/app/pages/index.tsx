import Head from 'next/head';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Task List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl mb-4">Task List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
