import React, { useState, useEffect, useRef, Fragment } from "react";
import { Dialog, DialogBackdrop, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImagePopupProps = {
	currentImage: string | undefined;
	setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ImagePopup = (props: ImagePopupProps) => {
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (props.currentImage !== undefined) {
			setOpen(true);
		}
	}, [props.currentImage]);

	return (
		<Transition show={open} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				initialFocus={cancelButtonRef}
				onClose={() => {
					setOpen(false);
					props.setCurrentImage(undefined);
				}}
			>
				<div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</TransitionChild>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
						&#8203;
					</span>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="z-80 fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
							<button
								className="fixed right-10 top-10 h-8 w-8 appearance-none outline-none"
								onClick={() => {
									setOpen(false);
									props.setCurrentImage(undefined);
								}}
								ref={cancelButtonRef}
							>
								<XMarkIcon className="appearance-none rounded-md bg-slate-600 bg-opacity-75 text-slate-900" />
							</button>

							<LazyLoadImage className="max-h-[600px] max-w-[800px] rounded-md object-cover" src={props.currentImage} />
						</div>
					</TransitionChild>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ImagePopup;
