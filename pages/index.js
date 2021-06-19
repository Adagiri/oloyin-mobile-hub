import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../firebase";

export default function Home() {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("hooks"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div class="p-6 bg-yellow-500 max-w-md rounded-sm mt-8 shadow-xl mx-auto">
      {/* first example */}
      <div class="p-6 max-w-sm  bg-white mx-auto rounded-xl shadow-xl flex items-center space-x-4 mb-8">
        <div class="flex-shrink-0">
          <img
            class="h-12 w-12"
            src="oloyin_dark.png"
            alt="oloyin mobile hub"
          />
        </div>
        <div>
          <div class="text-xl font-medium text-red-800">Oloyin</div>
          <p class="text-gray-700">You have a new notification!</p>
        </div>
        <div class="flex-shrink-0">
          <img
            class="h-12 w-12"
            src="oloyin_dark.png"
            alt="oloyin mobile hub"
          />
        </div>
      </div>
      {/* second example */}
      <div class="py-8 px-8 max-w-sm bg-white rounded-xl mx-auto shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src="oloyin_dark.png"
          alt="Oloyin logo"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-xl text-black font-semibold">Hassan Abolaji</p>
            <p class="text-gray-500 font-medium">Data vendor</p>
          </div>
          <button class="px-4 py-1 text-sm text-green-600 font-bold rounded-lg border border-green-600 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
