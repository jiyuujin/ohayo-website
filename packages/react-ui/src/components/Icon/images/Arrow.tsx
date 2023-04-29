export function ArrowUp({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" className="mr-2" fill="none">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ArrowDown({ size = 24 }) {
  return (
    <svg role="img" width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <title></title>
      <path
        fillRule="evenodd"
        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
      />
    </svg>
  )
}
