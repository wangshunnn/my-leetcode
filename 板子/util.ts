/**
 * Hamming Weight 汉明权重算法 `O(1)`
 * - 计算二进制中 `1` 的个数
 */
export function bitCount32(n: number) {
  n = n - ((n >> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  n = (n + (n >> 4)) & 0x0f0f0f0f
  n = n + (n >> 8)
  n = n + (n >> 16)
  return n & 0x3f
}
