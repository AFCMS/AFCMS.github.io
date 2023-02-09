import { useState, useEffect, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ImagePopup = (props: {
	currentImage: string | undefined;
	setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (props.currentImage !== undefined) {
			setOpen(true);
		}
	}, [props.currentImage]);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				initialFocus={cancelButtonRef}
				onClose={() => {
					setOpen(false);
					props.setCurrentImage(undefined);
				}}
			>
				<div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden sm:inline-block sm:h-screen sm:align-middle"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="z-80 fixed top-0 left-0 flex h-screen w-screen items-center justify-center">
							<button
								className="fixed top-10 right-10 h-8 w-8 appearance-none"
								onClick={() => {
									setOpen(false);
									props.setCurrentImage(undefined);
								}}
								ref={cancelButtonRef}
							>
								<XMarkIcon className="rounded-md bg-slate-600 bg-opacity-75 text-slate-900" />
							</button>

							<img
								className="max-h-[600px] max-w-[800px] rounded-md object-cover"
								src={props.currentImage}
							/>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ImagePopup;
