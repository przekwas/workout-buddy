import { BsMailbox } from 'react-icons/bs';

import { Container } from '@/components';

export default function ContactSection() {
	return (
		<div className=" bg-primary-content">
			<Container>
				<div className="min-h-screen text-info hero">
					<div className="flex-col hero-content lg:flex-row-reverse">
						<div className="max-w-sm rounded-lg shadow-2xl mockup-code">
							<pre data-prefix="$">
								<code>npm i working-on-it</code>
							</pre>
							<pre data-prefix=">" className="text-success">
								<code>installing...</code>
							</pre>
							<pre data-prefix=">" className="bg-error text-error-content">
								<code>Error, dev is human!</code>
							</pre>
						</div>
						<div>
							<h1 className="text-5xl font-bold">Notice a bug?</h1>
							<p className="py-6">
								There's probably ... a lot! I code a lot and don't bother testing
								like a <i>real</i> professional developer (
								<span role="img" aria-label="Eyes">
									👀
								</span>
								). Shoot me an email (<b>luke@covalence.io</b>) or open an issue on
								GitHub! Or hell, fix it yourself and submit a pull request.{' '}
								<span role="img" aria-label="Folded Hands">
									🙏
								</span>
							</p>
							<button
								onClick={() =>
									(window.location.href =
										'mailto:luke@covalence.io?subject=Your+Code+Sucks%2C+Idiot.')
								}
								className="gap-2 btn btn-secondary">
								Email Me
								<BsMailbox className="w-6 h-6" />
							</button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
