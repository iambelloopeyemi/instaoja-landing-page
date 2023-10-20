export default function Button({ children }: { children: string }) {
  return (
    <>
      <button className="block bg-olive px-5 py-2.5 rounded-full hover:scale-105 text-white font-bold">
        {children}
      </button>
    </>
  );
}
