"use client";

const FriendState = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          <div className="bg-white shadow px-5 py-10 rounded">
            <h4 className="font-bold text-xl text-center">10</h4>
            <p className="text-gray-500 text-center">Total Friends</p>
          </div>
          <div className="bg-white shadow px-5 py-10 rounded">
            <h4 className="font-bold text-xl text-center">3</h4>
            <p className="text-gray-500 text-center">On Track</p>
          </div>
          <div className="bg-white shadow px-5 py-10 rounded">
            <h4 className="font-bold text-xl text-center">6</h4>
            <p className="text-gray-500 text-center">Need Attention</p>
          </div>
          <div className="bg-white shadow px-5 py-10 rounded">
            <h4 className="font-bold text-xl text-center">12</h4>
            <p className="text-gray-500 text-center">Interactions This Month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendState;
