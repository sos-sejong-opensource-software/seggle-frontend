interface LabelProps {
  desc: string;
}

export default function Label({desc}: LabelProps) {
    return (
      <div>
        <label className="text-gray-500">{desc}</label>
    </div>
    )
}       