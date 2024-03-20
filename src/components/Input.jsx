export default function Input({ label, type, ...props }) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type={type} {...props} required />
    </>
  );
}
