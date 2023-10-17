interface ButtonProp {
  text: string;
}

export default function Button({ text }: ButtonProp) {
  return (
    <>
      <button className="bg-olive px-4 py-2 rounded-full hover:scale-105 text-white font-bold">
        {text}
      </button>
    </>
  );
}
