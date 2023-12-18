let headerHeightRef: Ref<number>

export default function composable() {
  headerHeightRef ??= ref(0)
  return headerHeightRef
}
