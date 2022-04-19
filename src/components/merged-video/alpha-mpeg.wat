(module
	(memory (export "memory") 1)

	(func (export "MergeAlpha")
		(param $width i32) (param $height i32)
		(local $x i32) (local $y i32) (local $alphaSrc i32) (local $alphaDest i32)

		(local.set $x (i32.const 0))
		(local.set $y (i32.const 0))

		(i32.mul (i32.const 4) (local.get $width))
		local.set $alphaSrc
		;; $alphaSrc = Right-side index

		i32.const 3
		local.set $alphaDest
		;; $alphaDest = Left-side alpha index

		(block (loop
			;; if($y >= $height) break
			(br_if 1 (i32.ge_u (local.get $y) (local.get $height)))

			(local.set $x (i32.const 0)) ;; $y = 0

			(block (loop
				;; if($x >= $width) break
				(br_if 1 (i32.ge_u (local.get $x) (local.get $width)))

				local.get $alphaDest
					local.get $alphaSrc
					i32.load8_u ;; *$alphaSrc
				i32.store8 ;; *$alphaDest = *$alphaSrc

				(i32.add (i32.const 4) (local.get $alphaDest))
				local.set $alphaDest ;; $alphaDest += 4

				(i32.add (i32.const 4) (local.get $alphaSrc))
				local.set $alphaSrc ;; $alphaSrc += 4

				(i32.add (local.get $x) (i32.const 1))
				local.set $x ;; $x += 1

				(br 0) ;; continue
			))

			(i32.mul (local.get $width) (i32.const 4))
			local.get $alphaDest
			i32.add
			local.set $alphaDest ;; $alphaDest += $width * 4

			(i32.mul (local.get $width) (i32.const 4))
			local.get $alphaSrc
			i32.add
			local.set $alphaSrc ;; $alphaSrc += $width * 4

			(i32.add (local.get $y) (i32.const 1))
			local.set $y ;; $y += 1

			(br 0) ;; continue
		))
	)
)